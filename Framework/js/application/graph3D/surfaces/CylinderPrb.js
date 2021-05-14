Surfaces.prototype.cylinderPrb = (size = 6, a = 1/2, steps = 12) => {
    
    const points = [];
    let step = size / steps;
    let angle = Math.PI / steps;
    for (let y = -size / 2; y < size / 2 + step; y += step) {
        for (let phi = 0; phi < 2 * Math.PI; phi += angle) {
            points.push(new Point(
                y ** 2 / 2 / a,
                y,
                size * Math.sin(phi),
            ))
        }
    }
    return new Subject(points)
}