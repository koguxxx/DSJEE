package mohamedcherif.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @ManyToOne
    @JoinColumn(name = "category_id") // Ceci créera la clé étrangère dans la table PRODUCT
    private Category category;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Le nom du produit est obligatoire.")
    private String name;

    @Min(value = 0, message = "Le prix ne peut pas être négatif.")
    private double price;

    // Dans mohamedcherif.model.Product.java
// ...
    @Min(value = 0, message = "La quantité en stock ne peut pas être négative.")
    @Column(name = "quantity") // <--- Ajoutez ceci !
    private int stockQuantity;
// ...
}