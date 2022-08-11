import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";
import axios from "axios";
import Post from "../models/Post";

// Context object type
export type AppContextObject = {
  posts: Post[];
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

// Create context
const AppContext = createContext<AppContextObject | null>(null);

// Creating the provider
const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  /**
   * Get list of posts
   * @params none
   * @return void
   */
  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <AppContext.Provider value={{ posts, isMenuOpen, setIsMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
