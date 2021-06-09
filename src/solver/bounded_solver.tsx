// Taken from Scipy implementation
// because could not find good bounded nonlinear solver for Typescript
// # ******NOTICE***************
// # optimize.py module by Travis E. Oliphant
// #
// # You may copy and use this module as you see fit with no
// # guarantee implied provided you keep this notice in all copies.
// # *****END NOTICE************


export function minimize_bounded(func: (x: number) => number, bounds: [number, number],
    xatol = 1e-5, maxiter = 500) {

    // """
    // Options
    // -------
    // maxiter : int
    //     Maximum number of iterations to perform.
    // disp: int, optional
    //     If non-zero, print messages.
    //         0 : no message printing.
    //         1 : non-convergence notification messages only.
    //         2 : print a message on convergence too.
    //         3 : print iteration results.
    // xatol : float
    //     Absolute error in solution `xopt` acceptable for convergence.
    // """

    let maxfun = maxiter
    let x1, x2
    [x1, x2] = bounds

    if (x1 > x2) {
        throw Error("The lower bound exceeds the upper bound.")
    }


    let flag = 0
    let header = ' Func-count     x          f(x)          Procedure'
    let step = '       initial'

    let sqrt_eps = Math.sqrt(2.2e-16)
    let golden_mean = 0.5 * (3.0 - Math.sqrt(5.0))
    let a = x1
    let b = x2
    let fulc = a + golden_mean * (b - a)
    let nfc = fulc
    let xf = fulc
    let rat = 0.0
    let e = 0.0
    let x = xf
    let fx = func(x)

    let num = 1
    let fu = Infinity

    let ffulc = fx
    let fnfc = fx
    let xm = 0.5 * (a + b)
    let tol1 = sqrt_eps * Math.abs(xf) + xatol / 3.0
    let tol2 = 2.0 * tol1
    let si, golden
    let p, q, r


    while (Math.abs(xf - xm) > (tol2 - 0.5 * (b - a))) {
        golden = 1
        // Check for parabolic fit
        if (Math.abs(e) > tol1) {
            golden = 0
            r = (xf - nfc) * (fx - ffulc)
            q = (xf - fulc) * (fx - fnfc)
            p = (xf - fulc) * q - (xf - nfc) * r
            q = 2.0 * (q - r)
            if (q > 0.0) p = -p
            q = Math.abs(q)
            r = e
            e = rat

            // Check for acceptability of parabola
            if ((Math.abs(p) < Math.abs(0.5 * q * r)) && (p > q * (a - xf)) &&
                (p < q * (b - xf))) {
                rat = (p + 0.0) / q
                x = xf + rat
                step = '       parabolic'

                if (((x - a) < tol2) || ((b - x) < tol2)) {
                    si = Math.sign(xm - xf) + ((xm == xf) ? 1 : 0)
                    rat = tol1 * si
                }
            }

            else golden = 1
        }

        if (golden == 1) {
            // do a golden-section step
            if (xf >= xm) e = a - xf
            else e = b - xf
            rat = golden_mean * e
            step = '       golden'
        }

        si = Math.sign(rat) + (rat == 0 ? 1 : 0)
        x = xf + si * Math.max(Math.abs(rat), tol1)
        fu = func(x)
        num += 1

        if (fu <= fx) {
            if (x >= xf) a = xf
            else b = xf
            fulc = nfc
            ffulc = fnfc
            nfc = xf
            fnfc = fx
            xf = x
            fx = fu
        }

        else {
            if (x < xf) a = x
            else b = x
            if ((fu <= fnfc) || (nfc == xf)) {
                fulc = nfc
                ffulc = fnfc
                nfc = x
                fnfc = fu
            }
            else if ((fu <= ffulc) || (fulc == xf) || (fulc == nfc)) {
                fulc = x
                ffulc = fu
            }
        }

        xm = 0.5 * (a + b)
        tol1 = sqrt_eps * Math.abs(xf) + xatol / 3.0
        tol2 = 2.0 * tol1

        if (num >= maxfun) {
            flag = 1
            break
        }
    }

    if (isNaN(xf) || isNaN(fx) || isNaN(fu)) {
        flag = 2
    }

    let fval = fx

    const message: {[key: number] : string} = {
        0: 'Solution found.',
        1: 'Maximum number of function calls reached.',
        2: 'Function or seed is NaN.'
    }

    return {
        fun: fval, status: message[flag], success: (flag == 0), x: xf, nfev: num
    }

}