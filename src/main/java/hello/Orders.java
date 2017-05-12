package hello; /**
 * Created by Shubhanshuc on 12/05/17.
 */

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToMany(fetch = FetchType.EAGER)
    private Set<OrdersLine> ordersLine = new HashSet<>();

    @ManyToOne
    private Customer customer;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Set<OrdersLine> getOrdersLine() {
        return ordersLine;
    }

    public void setOrdersLine(Set<OrdersLine> ordersLine) {
        this.ordersLine = ordersLine;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
