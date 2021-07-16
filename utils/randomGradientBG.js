const directions = [
    'bg-gradient-to-t', 'bg-gradient-to-tr',
    'bg-gradient-to-r', 'bg-gradient-to-br',
    'bg-gradient-to-b', 'bg-gradient-to-bl',
    'bg-gradient-to-l', 'bg-gradient-to-tl'
]
const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']
const weights = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']


export function randomGradientBackground() {
    return `${directions[Math.floor(Math.random() * directions.length)]} `
        + `from-${colors[Math.floor(Math.random() * colors.length)]}-${weights[Math.floor(Math.random() * weights.length)]} `
        + `to-${colors[Math.floor(Math.random() * colors.length)]}-${weights[Math.floor(Math.random() * weights.length)]}`
}