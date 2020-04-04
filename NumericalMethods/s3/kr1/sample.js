const N = 5;
const A = {
    i: 3,
    j: 1,
};

/**
 * @property {Number} i
 * @property {Number} j
 */
class Point {
    constructor(i = 0, j = 0) {
        this.i = i;
        this.j = j;
    }

    toString() {
        return '(' + this.i + ', ' + this.j + ')';
    }
}

/**
 * @property {Point} A
 * @property {Point} B
 */
class Vector {
    constructor(A, B) {
        this.A = A;
        this.B = B;
    }
}

function createMatrix(initialMatrix = []) {
    const matrix = [...initialMatrix];

    let n = 1;
    for (let i = 0; i < N; i++) {
        matrix[i] = [];

        for (let j = 0; j < N; j++) {
            matrix[i][j] = n;
            n++;
        }
    }

    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < N; i++) {
        let str = '';

        for (let j = 0; j < N; j++) {
            str += matrix[i][j].toString().padStart(2, ' ') + '  ';
        }

        console.log(str);
    }
}

/**
 * @param {Vector} AB
 * @param {Vector} CD
 */
function findBorders(AB, CD) {
    for (let i = A.i, j = A.j; i >= 0 && j >= 0; i--, j--) {
        AB.A.i = i;
        AB.A.j = j;
    }
    for (let i = A.i, j = A.j; i < N && j < N; i++, j++) {
        AB.B.i = i;
        AB.B.j = j;
    }
    for (let i = A.i, j = A.j; i < N && j >= 0; i++, j--) {
        CD.A.i = i;
        CD.A.j = j;
    }
    for (let i = A.i, j = A.j; i >= 0 && j < N; i--, j++) {
        CD.B.i = i;
        CD.B.j = j;
    }
}

function findLines(EF, KL) {
    EF.A = {
        i: A.i,
        j: 0
    };
    EF.B = {
        i: A.i,
        j: N - 1
    };

    KL.A = {
        i: 0,
        j: A.j
    };
    KL.B = {
        i: N - 1,
        j: A.j
    };
}

/**
 * @param {Point} point
 * @param {Vector} vector
 */
function cross(point, vector) {
    return (vector.B.i - vector.A.i) * (point.j - vector.A.j) - (vector.B.j - vector.A.j) * (point.i - vector.A.i);
}

function calcSum(matrix) {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const point = new Point(i, j);
            const value = matrix[i][j];

            const crossAB = cross(point, AB);
            const crossCD = cross(point, CD);
            const crossEF = cross(point, EF);
            const crossKL = cross(point, KL);

            if ((crossEF <= 0 && crossCD >= 0) || (crossEF <= 0 && crossAB >= 0)) {
                sum2 += value;
            }

            if ((crossKL >= 0 && crossCD >= 0) || (crossKL >= 0 && crossAB <= 0)) {
                sum3 += value;
            }

            if ((crossAB <= 0 && crossEF >= 0) || (crossCD <= 0 && crossEF >= 0)) {
                sum1 += value;
            }

            if ((crossKL <= 0 && crossAB >= 0) || (crossKL <= 0 && crossCD <= 0)) {
                sum4 += value;
            }
        }
    }

    // sum1 -= matrix[A.i][A.j];
    // sum2 -= matrix[A.i][A.j];
    // sum3 -= matrix[A.i][A.j];
    // sum4 -= matrix[A.i][A.j];

    console.log('G = ' + sum1); // 167
    console.log('H = ' + sum2); // 183
    console.log('P = ' + sum3); // 125
    console.log('Q = ' + sum4); // 99
}

const matrix = createMatrix();
const AB = new Vector(new Point(), new Point());
const CD = new Vector(new Point(), new Point());
const EF = new Vector(new Point(), new Point());
const KL = new Vector(new Point(), new Point());

printMatrix(matrix);
findBorders(AB, CD);
findLines(EF, KL);
calcSum(matrix);
