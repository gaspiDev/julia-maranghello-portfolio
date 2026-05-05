import { execSync } from "node:child_process"

const run = (cmd) => {
  console.log(`\n$ ${cmd}`)
  try {
    const out = execSync(cmd, { cwd: "/vercel/share/v0-project", stdio: "pipe" }).toString()
    if (out.trim()) console.log(out)
    return out
  } catch (err) {
    const stdout = err.stdout?.toString() ?? ""
    const stderr = err.stderr?.toString() ?? ""
    if (stdout.trim()) console.log(stdout)
    if (stderr.trim()) console.error(stderr)
    throw err
  }
}

console.log("=== Git status ===")
run("git status")

console.log("\n=== Staging changes ===")
run("git add -A")

const commitMsg = `fix(hero): improve background readability, mobile layout, and animate toggles

- Replace dark hero overlay with warm cream gradient for proper text contrast
- Strengthen subtext color from muted to foreground/80 for legibility
- Lock hero to 100svh on mobile and tighten spacing so footer stays in view
- Add sliding pill animation to language toggle (ES/EN)
- Animate menu icon morph (hamburger <-> X) with rotate + crossfade
- Smoothly animate mobile menu panel open/close with staggered link reveal

Co-authored-by: v0[bot] <v0[bot]@users.noreply.github.com>`

console.log("\n=== Committing ===")
try {
  // Use heredoc-safe approach: write message to temp file
  const fs = await import("node:fs")
  const path = "/tmp/v0-commit-msg.txt"
  fs.writeFileSync(path, commitMsg)
  run(`git commit -F ${path}`)
} catch {
  console.log("(nothing to commit, continuing)")
}

console.log("\n=== Current branch ===")
run("git rev-parse --abbrev-ref HEAD")

console.log("\n=== Pushing HEAD to origin/dev ===")
run("git push origin HEAD:dev")

console.log("\n=== Done ===")
