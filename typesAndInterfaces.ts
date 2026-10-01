// Using an Interface
interface UserInterface {
    id: number;
    name: string;
}

const userA: UserInterface = { id: 1, name: "Alice" };

// Using a Type Alias
type UserType = {
    id: number;
    name: string;
};

const userB: UserType = { id: 2, name: "Bob" };


// Extending an Interface
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

// Combining Types (Intersection)
type Point2D = { x: number; y: number };
type Point3D = Point2D & { z: number };
