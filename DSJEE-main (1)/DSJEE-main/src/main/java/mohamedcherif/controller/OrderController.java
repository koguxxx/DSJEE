package mohamedcherif.controller;

import mohamedcherif.model.Order;
import mohamedcherif.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:8082")

public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getAll() {
        return orderService.getAll();
    }

    @PostMapping
    public ResponseEntity<Order> create(@RequestBody Order o) {
        Order saved = orderService.save(o);
        return ResponseEntity.status(201).body(saved);
    }
}
