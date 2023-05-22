import { createContext, useContext } from "react";
import { createClient } from "@sanity/client";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";


const client = createClient({
  projectId: "hsnu30sj",
  dataset: "production",
  useCdn: true 
});


const getAutosUsados = async () => {
  const query = `*[_type == "autoUsado"]`;
  const results = await client.fetch(query);
  return results;
}


const urlFor = (source) => {
  const builder = imageUrlBuilder(client);
  return builder.image(source);
};


export const SanityContext = createContext();


export const SanityProvider = ({ children }) => {
  const [autosUsados, setAutosUsados] = useState([]);

  
  useEffect(() => {
    getAutosUsados().then((data) => setAutosUsados(data));
  }, []);

  const imageConfig = {
    projectId: "hsnu30sj",
    dataset: "production",
    maxSize: 1200,
    defaultWidth: 500,
    defaultHeight: 500
  };

  return (
    <SanityContext.Provider value={{ autosUsados, imageConfig, urlFor }}>
      {children}
    </SanityContext.Provider>
  );
};


export const useSanityContext = () => useContext(SanityContext);
