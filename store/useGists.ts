import { defineStore } from "pinia";
import getImageUrl from "~/utils/get-image";

export interface Gist {
    id: string;
    updated_at:string;
    description: string;
    imageUrl: string;
    html_url: string;
}

export interface State {
    gists: Gist[];
    username: string;
    apiURL: string;
    githubToken: string;
    currentPage: number;
    totalPage: number;
    perPage: number;
    gistCount: number;
}

export const useGistsStore = defineStore("gists", () => {
    const config = useRuntimeConfig();
    const state = reactive<State>({
        gists: [],
        username: "mustafadalga",
        apiURL: config.apiBaseURL,
        githubToken: config.githubToken,
        currentPage: 1,
        totalPage: 0,
        perPage: 20,
        gistCount: 0,
    });

    async function setGistCount() {
        try {
            const userUrl = `${state.apiURL}users/${state.username}`;
            const { data } = await useFetch(userUrl, {
                headers: {
                    Authorization: `Bearer ${state.githubToken}`,
                },
            });

            const value: { public_gists: number } = data.value as any;

            if (value.public_gists) {
                state.gistCount = value.public_gists;
            }
        } catch (err) {
        }
    }

    async function setGists() {
        try {
            const url = `${state.apiURL}users/${state.username}/gists?&per_page=${state.perPage}&page=${state.currentPage}`;
            const { data } = await useFetch(url, {
                headers: {
                    Authorization: `Bearer ${state.githubToken}`,
                },
            });

            if (data.value) {
                appendGists(data.value as Gist[]);
            }
        } catch (err) {
            // Handle error
        }
    }

    function appendGists(gists: Gist[]) {
        const gistList = gists.filter((gist) => gist.public);

        for (const gist of gistList) {
            const existingGist = state.gists.find((g) => g.id === gist.id);

            if (!existingGist) {
                state.gists.push({
                    id: gist.id,
                    description: gist.description,
                    imageUrl: getImageUrl(),
                    html_url:gist.html_url
                });
            }
        }
    };

    function orderGists() {
        state.gists.sort((a, b) => {
            const dateA = new Date(a.updated_at);
            const dateB = new Date(b.updated_at);
            return dateB - dateA;
        });
    }

    function setTotalPage() {
        state.totalPage = Math.round(state.gistCount / state.perPage + 0.5);
    }

    async function loadMore() {
        if (state.currentPage < state.totalPage) {
            state.currentPage++;
            await setGists();
            orderGists()
        }
    }

    async function init() {
        await setGistCount();
        await setTotalPage();
        await setGists();
        orderGists()
    }

    return {
        state,
        loadMore,
        init,
    };
});
