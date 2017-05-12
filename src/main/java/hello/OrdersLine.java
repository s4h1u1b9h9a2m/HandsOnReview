package hello; /**
 * Created by Shubhanshuc on 12/05/17.
 */

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class OrdersLine implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private Double Amount;
    private Integer Qty;

    @ManyToOne
    private Product product;
    @ManyToOne
    private Orders orders;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }

    public Double getAmount() {
        return Amount;
    }

    public void setAmount(Double amount) {
        Amount = amount;
    }

    public Integer getQty() {
        return Qty;
    }

    public void setQty(Integer qty) {
        Qty = qty;
    }
}
