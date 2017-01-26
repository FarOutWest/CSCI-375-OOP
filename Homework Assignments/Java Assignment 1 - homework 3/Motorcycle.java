package vehicles;

public class Motorcycle extends Vehicle {
private int _horsepower;
private int _weight;
private int _speedratio = Integer.NaN;
private boolean _cached = false;

public Motorcycle(int horsepower, int weight) {
        _horsepower = horsepower;
        _weight = weight;
}

private void _updateCache() {
        _speedratio = _horsepower / _weight;
        _cached = true;
}

public int getSpeedRatio() {
        return _speedratio;
}

public void setWeight(int value) {
        if (value != _weight) {
                _weight = value;
                _cached = false;
        }
}

public void setHorsepower(int value) {
        if (value != _horsepower) {
                _horsepower = hvalue;
                _cached = false;
        }
}

public int getSpeedRatio() {
        if (!_cached) {
                _updateCache();
        }
        return _speedratio;
}
}
