Surfaces.prototype.hyperboloid = (height = 4, radius = 3, a = 1 / 2, b = 1 / 2, c = 1 / 5, steps = 10) => {

    let step = height / steps;

    let angle = Math.PI / steps;
    const points = [];
    let x, y, z;
    for (let teta = 0; teta < 2 * Math.PI; teta += angle) {
        for (let i = - height / 2; i < height / 2 + step; i += step) {
            x = Math.sqrt(radius ** 2 + i ** 2 / c) * Math.cos(teta);
            y = Math.sqrt(radius ** 2 + i ** 2 / c) * Math.sin(teta);
            z = i + step;
            points.push(new Point(x / a, y / b, z / c));
        }
    }

    /***ребра***/
    const edges = [];
    for (let i = 0; i < points.length - steps; i += steps + 1)
        for (let j = i; j < i + steps; j++) {
            edges.push(new Edge(j, j + 1));
        }

    for (let i = 0; i < steps + 1; i++)
        for (let j = i; j < points.length - steps - 1; j += steps + 1) {
            edges.push(new Edge(j, j + steps + 1));
        }



    /*грани*/
    const polygones = [];
    for (let j = 0; j < points.length - steps - 1; j += steps + 1)
        for (let i = j; i < j + steps; i ++) {
            polygones.push(new Polygon([i, i + 1, i + steps + 2, i + steps + 1]))
        }

    return new Subject(points, edges, polygones);
}

/*Surfaces.prototype.hyperboloid = (size = 5, radius = 10, a = 1, b = 1, c = 1/2,  stepsInUnit = 10) => {

    step = size / stepsInUnit;

    const points = [];
    for (let i = - size; i < size + step; i += step) {
        for (let j = - size; j < size + step; j += step) {
            points.push(new Point(i / a, j / b, Math.sqrt(i ** 2 + j ** 2 - radius) / c));
        }
    }
    for (let i = - size; i < size + step; i += step) {
        for (let j = - size; j < size + step; j += step) {
            points.push(new Point(i / a, j / b, -Math.sqrt(i ** 2 + j ** 2 - radius) / c));
        }
    }

    const edges = [];
    for (let j = 0; j < 2 * stepsInUnit; j++)
        for (let i = j; i < points.length; i += 2 * stepsInUnit + 1)
            edges.push(new Edge(i, i + 1));
    for (let i = 0; i < points.length / 2 - 2 * stepsInUnit - 1; i++)
        edges.push(new Edge(i, i + 2 * stepsInUnit + 1));
    for (let i = points.length / 2; i < points.length - 2 * stepsInUnit - 1; i++)
        edges.push(new Edge(i, i + 2 * stepsInUnit + 1));


    const polygones = [];
    for (let i = 0; i < points.length / 2 - 2 * stepsInUnit - 1; i += 2 * stepsInUnit + 1)
        for (let j = i; j < i + 2 * stepsInUnit; j++)
            polygones.push(new Polygon([j, j + 1, j + 2 * stepsInUnit + 2, j + 2 * stepsInUnit + 1]));
    for (let i = points.length / 2; i < points.length - 4 * stepsInUnit - 1; i += 2 * stepsInUnit + 1)
        for (let j = i; j < i + 2 * stepsInUnit; j++)
            polygones.push(new Polygon([j, j + 1, j + 2 * stepsInUnit + 2, j + 2 * stepsInUnit + 1]));

    return new Subject(points, edges, polygones);
}*/