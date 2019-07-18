export const playerData = player => {
  const playerDetails = player.excerpt.rendered;
  const playerAlias = player.slug.split("-");
  for (const [index, name] of playerAlias.entries()) {
    playerAlias[index] = name.charAt(0).toUpperCase() + name.slice(1);
  }
  const [, city, , country] = /From:\s(.*)(.*,\s)(.*)(<br \/>)/.exec(
    playerDetails
  );
  return {
    id: player.id,
    shirt: Number(/Shirt:\s(.*)(<br \/>)/.exec(playerDetails)[1]),
    alias: playerAlias[1]
      ? `${playerAlias[0].toUpperCase()} ${playerAlias[1].toUpperCase()}`
      : playerAlias[0].toUpperCase(),
    name: player.title.rendered,
    position: /Position:\s(.*)(<br \/>)/.exec(playerDetails)[1],
    city,
    country,
    since: /Since:\s(.*)(<br \/>)/.exec(playerDetails)[1],
    link: `/players/${player.slug}`,
    twitter: `https://www.twitter.com${
      /Twitter:\s(.*)(&)/.exec(playerDetails)[1]
    }`
  };
};
