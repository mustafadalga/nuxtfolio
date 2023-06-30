import { useRepositoriesStore } from "~/store/useRepositories";

export default function useFetchBranch() {
  const { state } = useRepositoriesStore();

  async function fetchBranch(name: string): Promise<string | undefined> {
    try {
      const url = `${state.apiURL}repos/${state.username}/${name}`;

      const {
        data: { value },
      } = await useFetch(url, {
        headers: {
          Authorization: `Bearer ${state.githubToken}`,
        },
      });
      return (value as any).default_branch;
    } catch (e) {}
  }

  return {
    fetchBranch,
  };
}
