Surfaces.prototype.cone = (size = 5, a = 1, b = 1, c = 1 / 2, stepsInUnit = 8) => {
    step = size / stepsInUnit;

    const points = [];
    for (let i = - size; i < size + step; i += step) {
        for (let j = - size; j < size + step; j += step) {
            points.push(new Point(i / a, j / b, Math.sqrt(i ** 2 + j ** 2) / c));
            //points.push(new Point(i / a, j / b, -Math.sqrt(i ** 2 + j ** 2) / c));
        }
    }

    const edges = [];
    for (let j = 0; j < 2 * stepsInUnit; j++)
        for (let i = j; i < points.length; i += 2 * stepsInUnit + 1)
            edges.push(new Edge(i, i + 1));
    for (let i = 0; i < points.length - 2 * stepsInUnit - 1; i++)
        edges.push(new Edge(i, i + 2 * stepsInUnit + 1));

    const polygones = [];
    for (let i = 0; i < points.length - 4 * stepsInUnit - 1; i += 2 * stepsInUnit + 1)
        for (let j = i; j < i + 2 * stepsInUnit; j++)
            polygones.push(new Polygon([j, j + 1, j + 2 * stepsInUnit + 2, j + 2 * stepsInUnit + 1]));

    return new Subject(points, edges, polygones);
}