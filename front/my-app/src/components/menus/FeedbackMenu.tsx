/* eslint-disable react/no-unescaped-entities */
import { Command } from "cmdk";
import Cookies from "js-cookie";
import { useState } from "react";
import toast from "react-hot-toast";
import { extensionId } from "../../lib/extension";

interface ActivateMenuProps {
  isDemo?: boolean;
  setPages: (pages: string[]) => void;
}

export function FeedbackMenu({ isDemo, setPages }: ActivateMenuProps) {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  return (
    <Command.Group heading="Feedback">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="What's on your mind?"
        className="feedback-body"
        rows={5}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="feedback-email"
          placeholder="Your email (in case you'd like to get reply!)"
        />
        <button
          className="feedback-send"
          style={{
            marginLeft: "10px",
            marginTop: 0,
            marginBottom: 10,
          }}
          onClick={() => {
            if (isDemo) {
              fetch("https://api.cloudtempo.dev/feedback", {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify({ body, email }),
              })
                .then(() => {
                  setPages(["Home"]);
                })
                .catch(() => {
                  setPages(["Home"]);
                });
            } else {
              chrome.runtime.sendMessage(
                extensionId,
                {
                  type: "feedback",
                  body,
                  email,
                  userInfo: Cookies.get("aws-userInfo"),
                },
                function () {
                  toast.success("Thanks for your feedback!", {
                    duration: 4000,
                    position: "top-center",
                  });
                  setPages(["Home"]);
                }
              );
            }
          }}
        >
          Send
        </button>
      </div>
    </Command.Group>
  );
}
