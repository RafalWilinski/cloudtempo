const OpenButton = () => {
  const openChannel = new BroadcastChannel("open-channel");

  return (
    <div
      onClick={() => openChannel.postMessage({ type: "open" })}
      className="cloudtempo-open-button"
    >
      {" "}
    </div>
  );
};

export default OpenButton;
