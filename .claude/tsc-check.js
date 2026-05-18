// tsc-check.js — PostToolUse hook: type-check after Write/Edit on .ts files
const { execSync } = require('child_process')
const path = require('path')

const ECOSYSTEM_ROOT = path.resolve(__dirname, '..') // c:\Web-3D

let raw = ''
process.stdin.on('data', d => (raw += d))
process.stdin.on('end', () => {
  let json
  try { json = JSON.parse(raw.replace(/^﻿/, '')) } catch { process.exit(0) }

  const fp = json.tool_input?.file_path
  if (!fp || !fp.endsWith('.ts')) process.exit(0)

  const norm = fp.replace(/\//g, path.sep)
  const sep = path.sep

  let cwd = null
  if (norm.includes(`${sep}00-Threejs${sep}src${sep}`)) {
    cwd = path.join(ECOSYSTEM_ROOT, 'THREEJS', '00-Threejs')
  } else if (norm.includes(`${sep}threejs-modules${sep}`) && !norm.includes(`${sep}node_modules${sep}`)) {
    cwd = path.join(ECOSYSTEM_ROOT, 'THREEJS', 'threejs-modules')
  }

  if (!cwd) process.exit(0)

  try {
    execSync('npx tsc --noEmit', { cwd, stdio: 'inherit', shell: true })
  } catch {
    // tsc exit 1 = type errors — already printed to stderr
  }
})
