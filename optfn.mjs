// Filename: optfn.js
// Timestamp: 2017.12.23-17:18:54 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)

export default (slugfn => (
  (fn, deffn) => typeof fn === 'function'
    ? fn : typeof deffn === 'function' ? deffn : slugfn
))(() => {});
