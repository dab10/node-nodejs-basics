const parseEnv = () => {
  const result = Object.entries(process.env)
    .filter(([key, _]) => key.startsWith('RSS_'))
    .map((item) => item.join('='))
    .join('; ');
  console.log(result);
};

parseEnv();