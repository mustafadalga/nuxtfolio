import axios from "axios";
import { Repository } from "~/store/useRepositories";

export default async function fetchRepositories(page = 1, per_page = 20): Promise<Repository[]> {
    try {
      const baseURL = process.env.NUXT_API_BASE_URL;
      const githubToken = process.env.NUXT_GITHUB_TOKEN;
      const username = "mustafadalga";
      const url = `${baseURL}users/${username}/repos?page=${page}&per_page=${per_page}`;
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${githubToken}` },
      });
  
      if (response.data.length === 0) {
        return [];
      } else {
        return response.data.concat(await fetchRepositories(page + 1, per_page));
      }
    } catch (e) {
      return [];
    }
  }
  