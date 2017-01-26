import vehicles.*;
import java.util.*;

public class Main {
public static void main(String [] args) {
        ArrayList<Vehicle> shapes = new ArrayList<Vehicle>();
        vehicles.add(new Car(250,2500));
        vehicles.add(new Motorcycle(80, 300));

        Motorcycle moto = new Motorcycle(150, 500);
        System.out.println("Motorcycle 150hp & 500lbs speed ratio = " + moto.getSpeedRatio());
        moto.setHorsepower(100);
        System.out.println("Motorcycle 100hp & 500lbs speed ratio = " + moto.getSpeedRatio());

        for(Vehicle vehicle : vehicles) {
                System.out.println("speed ratio = " + vehicle.getSpeedRatio());
        }
}
}
