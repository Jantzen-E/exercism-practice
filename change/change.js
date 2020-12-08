export class Change {
  calculate(coinArray, target) {
      const calculateChange = target => {
          const changes = new Map()
          for(let i = 0; i <= target; i++) {
              const change = calculateMinCoins(i, changes)
              changes.set(i, change)
          }

          const change = changes.get(target)

          return (change.reduce(addChange, 0) === target) ? change : null
      }

      const calculateMinCoins = (target, lowerChanges) => 
          coinArray.filter(coin => coin <= target)
              .reverse()
              .map(coin => (lowerChanges.get(target - coin) || []).concat([coin]))
              .filter(change => change.reduce(addChange, 0) == target)
              .sort((a, b) => a.length - b.length)[0] || []

      const addChange = (a, b) => a + b

      if (target < 0) {
          throw new Error("Negative totals are not allowed.")
      }

      const change = calculateChange(target)

      if (!change) {
          throw new Error(`The total ${target} cannot be represented in the given currency.`)
      }

      return change
  }
}