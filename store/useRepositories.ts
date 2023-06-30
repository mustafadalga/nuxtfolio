import { defineStore } from "pinia";
import getImageUrl from "~/utils/get-image";

export interface Repository {
  name: string;
  stars: number;
  forks: number;
  imageUrl: string;
}

export interface State {
  repositories: Repository[];
  username: string;
  apiURL: string;
  githubToken: string;
  currentPage: number;
  totalPage: number;
  perPage: number;
  repoCount: number;
}

interface ResponseRepository {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
}

export const useRepositoriesStore = defineStore("repositories", () => {
  const config = useRuntimeConfig();
  const state = reactive<State>({
    repositories: [],
    username: "mustafadalga",
    apiURL: config.apiBaseURL,
    githubToken: config.githubToken,
    currentPage: 1,
    totalPage: 0,
    perPage: 20,
    repoCount: 0,
  });

  async function setRepoCount() {
    try {
      const userUrl = `${state.apiURL}users/${state.username}`;
      const { data } = await useFetch(userUrl, {
        headers: {
          Authorization: `Bearer ${state.githubToken}`,
        },
      });

      const value: { public_repos: number } = data.value as any;

      if (value.public_repos) {
        state.repoCount = value.public_repos;
      }
    } catch (err) {}
  }

  async function setRepositories() {
    try {
      const url = `${state.apiURL}users/${state.username}/repos?type=public&per_page=${state.perPage}&page=${state.currentPage}`;

      const { data } = await useFetch(url, {
        headers: {
          Authorization: `Bearer ${state.githubToken}`,
        },
      });

      if (data.value) {
        appendRepositories(data.value as ResponseRepository[]);
      }
    } catch (err) {
      // Handle error
    }
  }

  const appendRepositories = (repositories: ResponseRepository[]) => {
    const repos = repositories.filter((repo) => !repo.fork);

    for (const repo of repos) {
      const existingRepo = state.repositories.find((r) => r.name === repo.name);
      if (!existingRepo) {
        state.repositories.push({
          name: repo.name,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          imageUrl: getImageUrl(),
        });
      }
    }
  };

  function orderRepositories(){
    state.repositories.sort((a, b) =>b.stars-a.stars);
  }

  function setTotalPage() {
    state.totalPage = Math.round(state.repoCount / state.perPage + 0.5);
  }


  async function loadMore() {
    if (state.currentPage < state.totalPage) {
      state.currentPage++;
      await setRepositories();
      orderRepositories()
    }
  }
  async function init() {
    await setRepoCount();
    await setTotalPage();
    await setRepositories();
    orderRepositories()
  }

  return {
    state,
    loadMore,
    init,
  };
});
