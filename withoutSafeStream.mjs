import * as fs from 'node:fs/promises';

(async () => {
    console.time("writeMany");
    const fileHandle = await fs.open("output.txt","w");

    const stream  = fileHandle.createWriteStream();

    for(let i=0;i<1e6;i++) {
        const buff = Buffer.from(` ${i}`,"utf-8");
        stream.write(buff);
    }
    stream.end(() => {
        console.timeEnd("writeMany");
    });
}) ();