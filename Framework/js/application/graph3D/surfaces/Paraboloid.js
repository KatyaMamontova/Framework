Surfaces.prototype.paraboloid = (size = 5, p = 1, steps = 12) => {

    step = size / steps;

    const points = [];
    for (let i = - size; i < size + step; i += step) {
        for (let j = - size; j < size + step; j += step) {
            points.push(new Point(i, j, i ** 2 / (2 * p) + j ** 2 / (2 * p)));
        }
    }

    const edges = [];
    for (let j = 0; j < 2 * steps; j++)
        for (let i = j; i < points.length; i += 2 * steps + 1)
            edges.push(new Edge(i, i + 1));
    for (let i = 0; i < points.length - 2 * steps - 1; i++)
        edges.push(new Edge(i, i + 2 * steps + 1));

    const polygones = [];
    for (let i = 0; i < points.length - 4 * steps - 1; i += 2 * steps + 1)
        for (let j = i; j < i + 2 * steps; j++)
            polygones.push(new Polygon([j, j + 1, j + 2 * steps + 2, j + 2 * steps + 1]));

    return new Subject(points, edges, polygones);
}