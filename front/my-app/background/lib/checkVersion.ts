export async function checkVersion() {
  const currentVersion = chrome.runtime.getManifest().version;

  try {
    const response = await (
      await fetch("https://cloudtempo.dev/api/latest")
    ).json();

    console.log(response);

    return {
      currentVersion,
      ...response,
    };
  } catch (error) {
    console.log(error);
    return { error: (error as any).message };
  }
}
