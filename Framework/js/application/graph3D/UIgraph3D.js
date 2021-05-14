class UIgraph3D {
    constructor({ callbacks }) {
        this.callbacks = callbacks;
        document.getElementById('checkPoint').addEventListener('change', () => this.callbacks.checkPoints());
        document.getElementById('checkEdge').addEventListener('change', () => this.callbacks.checkEdges());
        document.getElementById('checkPolygone').addEventListener('change', () => this.callbacks.checkPolygones());
        document.getElementById('cone').addEventListener('click', () => this.callbacks.setCone());
        document.getElementById('cube').addEventListener('click', () => this.callbacks.setCube());
        document.getElementById('cylinder').addEventListener('click', () => this.callbacks.setCylinder());
        document.getElementById('cylinder2').addEventListener('click', () => this.callbacks.setCylinder2());
        document.getElementById('cylinderPrb').addEventListener('click', () => this.callbacks.setCylinderPrb());
        document.getElementById('ellipse').addEventListener('click', () => this.callbacks.setEllipse());
        document.getElementById('hyperboloid').addEventListener('click', () => this.callbacks.setHyperboloid());
        document.getElementById('hyperboloid2').addEventListener('click', () => this.callbacks.setHyperboloid2());
        document.getElementById('hyperParaboloid').addEventListener('click', () => this.callbacks.setHyperParaboloid());
        document.getElementById('paraboloid').addEventListener('click', () => this.callbacks.setParaboloid());
        document.getElementById('sphere').addEventListener('click', () => this.callbacks.setSphere());
    }
}
