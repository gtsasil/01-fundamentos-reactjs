import { useState } from "react";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handlelikeComment() {
        setLikeCount((state) => { return state + 1});
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/18120967?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gleisson S Silva</strong>
                            <time title="15 de de Fev 2023 às 15:28" dateTime="2023-02-2023 15:7">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deleta comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handlelikeComment}>
                         <ThumbsUp />
                         Aplaudir <span>{likeCount}</span>
                    </button>
                   
                </footer>
            </div>
        </div>
    )
}