import React, { useEffect, useState } from "react";
import styles from "./pocket.module.css";
import NewGroup from "../NewNoteGroup/NewGroup";

const Pocket = (props) => {
  const [noteGroups, setNoteGroups] = useState([]);
  const [selectNote, setSelectNote] = useState("");

  useEffect(() => {
    const allGroups = JSON.parse(localStorage.getItem("pocketGroup")) || [];
    setNoteGroups(allGroups);
  }, []);

  const setNote = (name) => {
    setSelectNote(name);
    props.onSubmitApp(name);
    props.setBack(false);
  };

  return (
    <>
      <div className={`${styles.pocket} ${!props.back ? styles.mobilePocket : ""}`}>
        <h1>Pocket Notes</h1>
        <div className={styles.notes}>
          {noteGroups.length !== 0 ? (
            ""
          ) : (
            <div className={styles.notGroup}>
              <i className="fas fa-exclamation-triangle"></i>
              <h2>Add new note group</h2>
              <p>
                No groups available. Click on the below plus button to add new
                group.
              </p>
            </div>
          )}
          {noteGroups.map((group, index) => (
            <div
              className={styles.note}
              style={{
                backgroundColor:
                  selectNote === group[1] ? "rgba(0, 0, 0, 0.158)" : "",
              }}
              key={index}
              onClick={() => setNote(group[1])}
            >
              <div
                className={styles.noteLogo}
                style={{ backgroundColor: group[2] }}
              >
                {group[0]}
              </div>
              <div className={styles.noteName}>{group[1]}</div>
            </div>
          ))}
          <NewGroup newGroup={setNoteGroups} />
        </div>
      </div>
    </>
  );
};

export default Pocket;
