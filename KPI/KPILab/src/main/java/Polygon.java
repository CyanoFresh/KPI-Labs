public class Polygon extends Point implements PolygonInterface {
    Integer vertexCount;
    Integer side;

    public Polygon(Integer x, Integer y, Integer vertexCount, Integer side) {
        super(x, y);
        this.vertexCount = vertexCount;
        this.side = side;
    }

    @Override
    @InvokeAnnotation
    public Double calcS() {
        return (vertexCount * side) / (4 * Math.tan((Math.PI / 2) / vertexCount));
    }

    @Override
    @InvokeAnnotation
    public String toString() {
        return "Polygon{" +
                "vertexCount=" + vertexCount +
                ", side=" + side +
                ", S=" + calcS() +
                '}';
    }

    @Override
    public Integer getVertexCount() {
        return vertexCount;
    }

    @Override
    public void setVertexCount(Integer vertexCount) {
        this.vertexCount = vertexCount;
    }

    @Override
    public Integer getSide() {
        return side;
    }

    @Override
    public void setSide(Integer side) {
        this.side = side;
    }
}
