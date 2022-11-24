export const titles = [
  "Finally, a good search for AWS Console",
  "Command Bar for your AWS Console",
  "Grep through your AWS Console. Fast.",
  "Your AWS Console, supercharged.",
];

export const getRandomTitle = () => {
  const index = Math.floor(Math.random() * titles.length);
  return titles[index];
};
