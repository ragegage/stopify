export const byId = ({ byId, all }, ids) => (
  (ids || byId).map(id => all[id])
    .filter(value => value) // remove undefineds
)
