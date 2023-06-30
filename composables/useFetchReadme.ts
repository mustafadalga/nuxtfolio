import { useRepositoriesStore } from "~/store/useRepositories";

export default function useFetchReadme() {
  const { state } = useRepositoriesStore();

  async function fetchReadme(name: string,branch:string):Promise<any> {
    try {
        const url = `https://raw.githubusercontent.com/mustafadalga/${name}/${branch}/README.md`;

      const {data} = await useFetch(url);
      return data.value;
    } catch (e) {

    }
  }

  return {
    fetchReadme
  }
}
