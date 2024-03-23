import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "l2cr8h861ez7",
  environment: "master",
  accessToken: "n-38hwuyMmvPDyiOv9wBLmnRmLRT9gtwCZy0YpOG_R0",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });

      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
