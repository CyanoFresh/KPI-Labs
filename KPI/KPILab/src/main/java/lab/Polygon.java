package lab;

import org.springframework.stereotype.Component;

@Component
public class Polygon extends Point implements PolygonInterface {
    Integer vertexCount;
    Integer side;

    public Polygon(Integer x, Integer y, Integer vertexCount, Integer side) {
        super(x, y);
        this.setVertexCount(vertexCount);
        this.setSide(side);
    }

    public Polygon() {}

    @Override
    @InvokeAnnotation
    public Double calcS() {
        return (vertexCount * side * side) / (4 * Math.tan((Math.PI) / vertexCount));
    }

    @Override
    @InvokeAnnotation
    public String toString() {
        return "lab.Polygon{" +
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
        this.vertexCount = Math.abs(vertexCount);
    }

    @Override
    public Integer getSide() {
        return side;
    }

    @Override
    public void setSide(Integer side) {
        this.side = Math.abs(side);
    }
}
