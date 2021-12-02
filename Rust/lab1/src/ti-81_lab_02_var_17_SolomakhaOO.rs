// Solomakha Oleksandr TI-81 | Variant 17

/*

204

Дана действительная квадратная матрица порядка n. Найти наибольшее из значений элементов, расположенных
в заштрихованой части матрицы
_____
|\ /|
|/ \|
^^^^^

*/
fn task692e(a: &Vec<Vec<f64>>) -> f64 {
    let n = a.len();
    let center: usize = n / 2;

    let mut max = 0.;
    let mut k = 0;

    for col in 0..n {
        for row in k..n - k {
            let el = a[row][col];

            if el > max {
                max = el;
            }
        }

        if n%2==0 {
            if col < center - 1 {
                k += 1;
            } else if col == center {
                k -= 1;
            }
        } else {
            if k == center {
                k -= 1;
            } else {
                k += 1;
            }
        }
    }

    max
}

#[cfg(test)]
mod tests692e {
    use super::*;

    #[test]
    fn matrix3x3() {
        let a = vec![
            vec![1., 2., 3.],
            vec![4., 5., 6.],
            vec![7., 8., 9.],
        ];

        let result = task692e(&a);

        assert_eq!(9., result);
    }

    #[test]
    fn matrix4x4() {
        let a = vec![
            vec![1., 2., 3., 4.],
            vec![5., 6., 7., 8.],
            vec![9., 10., 11., 12.],
            vec![13., 14., 15., 16.],
        ];

        let result = task692e(&a);

        assert_eq!(16., result);
    }
}

fn main() {}