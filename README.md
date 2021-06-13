
## WHEN TO USE CONSTRUCTOR PATTERN 👨
EXAMPLE :
- Questions
-  Creating Users

-  INHERITANCE PATTERN / METHODS WHICH PRE_HARDCODED AS VALUES WE CREATED INITIALLY

## Prototype Pattern 🧬
EXAMPLE :
*DNA IS GOOD EXAMPLE
- CONSTRUCTOR : EYES,HAIR 
- PROTOTYPE  :DNA

## MODULAR Pattern
EXAMPLE :
*Chef👨‍🍳 want to cook🍲 ,  he maintains different fridges:
- 1. meat fridge 🍖
- 2. vegs fridge 🥔

=> uses its according whens its needed

```bash
   - ADVANTAGES
 * 1. MAINTAINABILITY (avoid DRY)
 * 2. NAMESPACING ( Global variables(BAD PRACTISE), namespace pollution)
 * 3. REUSABILITY ( reuse code in different projects)
```

##  Factory Pattern 🏭
EXAMPLE : Factory produces many products(car,motor,buses)
 * Factory may have sub factories 🚘, 🚋, 🚃
 * End user doesn't care about production process
 * He cares only how to sale a product 🤝

=> uses its according whens its needed

```bash
 * Advantages
 * 1. To seprate the object creation from its implementation
 * 2. To create a different instance based on conditions
 * 3 .Not exposes the constructors of the objects, preventing their modifications
```


##  Singleton Pattern

 * Singleton pattern doesn't allow you to create new instance every time, instead using reference it server the needs

 * Example: Buying a Course once 🎫, if you try to buy its doesn't allow you. 🏆


=> uses its according whens its needed

```bash
 * Hardware access
 * Database connections
 * Config files 
 * sharing a single washing machine among all the residents in a hotel
```


##  Builder Pattern / COMPOSITION 👷‍♂️
 * Suppose a customize computer then we should this patter
 * assume that we have boxes and its has label on it to differentiate,
 * so we can get any detail easily

```bash
 * To simplify the constructor of a complex object
 * To sepate the constructor and representation
 * COMPOSITION
 * Different representation for the object that is constructed 
 * 
 * ISSUES : To know what exactly this parameters are?
 * we can only say if we see the Person implementation
 *                              ?     ?    ?    ? 
 * const person = new Person('nick',true,false,true)
 * 
 * fix around 
 * const person = new Person('nick').employee().manager().partTime(12)
```


##  Decorator Pattern (Mechanic) 👷‍♂️
  -  Add additional feature to existing objects

```bash
 * 
 * 1. Modify an object dynamically
 * 2. Uses composition instead of inheritance
 * 3. More flexibility than static inheritance
```


```bash
 * //Example game 
 * const car 🚗 = new Car('BMW')
 * const superCar🏎️ = new CarTunning(car) // Updated  
 * 
```

##  Composite Pattern
  -  Add additional feature to existing objects

```bash
 * 1. Group of items or Trees
 * 2. Tree Strucute of objects
 * 3. Class hierarchies with primitive and objects
 * 4. Any level of Complexity
```

![App Screenshot](https://www.tutorialspoint.com/xml/images/tree_structure.jpg)
