for await (const line of Promise.resolve(10)) {
    console.log(line);
}