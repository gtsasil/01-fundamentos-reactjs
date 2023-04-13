import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://avatars.githubusercontent.com/u/18120967?v=4",
      name: "Gleisson S Silva",
      role: "Web developer"
    },
    content: [
      { type: "paragraph", content: " Falara galera" },
      { type: "paragraph", content: "Este é um projecto de React para meu portifólio no gitHub"},
      { type: "link", content: "Jane.design/doctorcare"},
    ],
    publishedAt: new Date("2022-05-03 20:00:00")
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://avatars.githubusercontent.com/u/19980737?v=4",
      name: "Evelynne Ribas",
      role: "Data Analyst"
    },
    content: [
      { type: "paragraph", content: "Falara galera" },
      { type: "paragraph", content: "Este é um projecto de React para meu portifólio no gitHub"},
      { type: "link", content: "Jane.design/doctorcare"},
    ],
    publishedAt: new Date("2022-05-10 20:00:00")
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
            return (
              <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })
        }
        </main>
      </div>
    </div>
  )
}

export default App