Feature: Mark an item as bought
    As a shopper 
    I should be able to mark items from my grocery list as bought.

    Scenario Outline: Mark an item as bought
        Given that I have a grocery list
        And I added <number> of the item <item>
        And with category <category>
        When I buy the item <item>
        Then the item <item> should be marked as bought

        Examples:
            |item    |category  |number|
            |milk    |dairy     |5     |
            |cucumber|vegetables|3     |
            |banana  |     fruit|6     |

    Scenario Outline: Trying to mark an non-existent item as bought
        Given that I have a grocery list
        When I try to mark the (non-existent) item <item> as bought
        Then a warning will be displayed

        Examples:
            |item   |
            |milk    |
            |cucumber|
            |banana  |