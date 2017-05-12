package hello;
/**
 * Created by Shubhanshuc on 12/05/17.
 */

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "ordersline", path = "ordersline")
public interface OrdersLineRepository extends PagingAndSortingRepository<OrdersLine, Long> {

    List<OrdersLine> findAll();

}
