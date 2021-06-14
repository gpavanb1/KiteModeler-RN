import { solveDiamond } from '../api'
import { isMatch } from 'lodash'

const inp = {
    geom: {
        'h1': 12.5,
        'h2': 25.6,
        'w1': 25.5,
        't': 0
    },
    bridle: {
        'b': 40.1,
        'k': 30.5,
    },
    fly: {
        'wind_speed': 3.,
        'altitude': 0.0,
        'line_length': 30.,
        'env_name': "Earth",
    },
    material: {
        'surface': "Plastic",
        'frame': "1/4 Balsa",
        'tail': "1 in Plastic",
        'line': "Nylon"
    }

}


test('kite-modeler-1', () => {
    const out = solveDiamond(inp)

    const expected = {
        _pressure: 101.40093090454886,
        _temperature: 288.14000000000004,
        _density: 1.226243914814742,
        _weight: 3.8197630284225,
        _cp: 27.583333333333336,
        _cg: 21.558577581179534,
        _surface_area: 485.77500000000003,
        _frame: 63.6,
        _aoa_no_torque: 0.3659548851317476,
        _lift: 40.660941532055936,
        _drag: 33.06200250073937,
        _vert_tension: 25.679761003633438,
        _horiz_tension: 33.06200250073937,
        _tension: 41.863422394288655
    }

    expect(isMatch(out, expected)).toBe(true)
})

test('kite-modeler-2', () => {
    const out = solveDiamond(inp)

    expect(out.catenary_equation(1.0)).toBe(1.0194555580227842)
    expect(out.range()).toBe(21.821113914053726)
    expect(out.height()).toBe(26.12278249417919)
})