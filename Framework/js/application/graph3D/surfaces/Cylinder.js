Surfaces.prototype.cylinder = (size = 10, a = 10, stepsInUnit = 12) => {

    /* let angle = Math.PI / steps;
    for (let y = -steps / 2; y < 2 * steps; y++) {
        for (let phi = 0; phi < 2 * Math.PI; phi += angle) {
            points.push(new Point(
                size * Math.cos(phi),
                y,
                size * Math.sin(phi),
            ))
        }
    } 
    
    или так:
    
    let angle = Math.PI / steps;
    const points = [];
    let x, y, z = 0;
    for (let i = 0; i < size + step; i += step) {
        for (let teta = 0; teta < 2 * Math.PI + angle; teta += angle) {
            x = size * Math.cos(teta);
            y = size * Math.sin(teta);
            z = i;
            points.push(new Point(x / a, y / b, z / c));
        }
    }*/


    step = size / stepsInUnit;

    const points = [];

    for (let i = - size; i < size + step; i += step) {
        for (let j = - size; j < size + step; j += step) {
            points.push(new Point(i, j, + Math.sqrt((1 + j ** 2 / size ** 2) * (a ** 2))));
        }
    }
    
    for (let i = - size; i < size + step; i += step) {
        for (let j = - size; j < size + step; j += step) {
            points.push(new Point(i, j, - Math.sqrt((1 + j ** 2 / size ** 2) * (a ** 2))));
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
    for (let i = points.length / 2; i < points.length - 2 * stepsInUnit - 1; i += 2 * stepsInUnit + 1)
        for (let j = i; j < i + 2 * stepsInUnit; j++)
            polygones.push(new Polygon([j, j + 1, j + 2 * stepsInUnit + 2, j + 2 * stepsInUnit + 1]));


    return new Subject(points, edges, polygones);

}