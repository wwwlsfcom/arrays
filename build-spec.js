import esbuild from 'esbuild';
import {globby} from "globby";
import {rimraf} from "rimraf";

const outdir = "__test__";

rimraf.sync(outdir.concat("/**/*Spec.js"), {glob: true});

const files = await globby(['spec/**/*Spec.js']);
const result = esbuild.build({
    entryPoints: files,
    outdir,
    bundle: true
});

console.log(JSON.stringify(result, null, 2));

console.log("测试代码构建完成");


