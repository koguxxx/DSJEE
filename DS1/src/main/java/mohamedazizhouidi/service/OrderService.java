package mohamedazizhouidi.service;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAll() {
        return orderRepository.findAll();
    }

    public Order save(Order o) {
        if (o.getOrderDate() == null) {
            o.setOrderDate(LocalDateTime.now());
        }
        return orderRepository.save(o);
    }
}
