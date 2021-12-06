// Solomakha Oleksandr TI-81 | Variant 17

/*

692 e

Дана действительная квадратная матрица порядка n. Найти наибольшее из значений элементов, расположенных
в заштрихованной части матрицы:
_____
|\ /|
|/ \|
^^^^^

1 0 1
1 1 1
1 0 1

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

        if n % 2 == 0 {
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

/*

694 г

Получить квадратную матрицу порядка n

*/
fn task694g(n: usize) -> Vec<Vec<i32>> {
    let mut matrix: Vec<Vec<i32>> = vec![vec![0; n]; n];

    matrix = matrix
        .iter()
        .enumerate()
        .map(
            |(i, row)| row.iter()
                .enumerate()
                .map(|(j, &el)| if i == j { ((i + 1) * (i + 2)) as i32 } else { el })
                .collect()
        )
        .collect();

    println!("{:?}", matrix);

    matrix
}

#[cfg(test)]
mod tests694g {
    use super::*;

    #[test]
    fn n2() {
        let n = 2;

        let expected = vec![
            vec![1 * 2, 0],
            vec![0, 2 * 3],
        ];

        let result = task694g(n);

        assert_eq!(expected, result);
    }

    #[test]
    fn n5() {
        let n = 5;

        let expected = vec![
            vec![1 * 2, 0, 0, 0, 0],
            vec![0, 2 * 3, 0, 0, 0],
            vec![0, 0, 3 * 4, 0, 0],
            vec![0, 0, 0, 4 * 5, 0],
            vec![0, 0, 0, 0, 5 * 6],
        ];

        let result = task694g(n);

        assert_eq!(expected, result);
    }
}

/*

580

Дано натуральное число n (n <= 99). Получить
все способы выплаты суммы n с помощью монет достоинством 1, 5, 10 и 20 коп.

*/
fn task580(n: usize) -> Vec<Vec<usize>> {
    assert!(n > 0);
    assert!(n <= 99);

    let mut result = vec![];

    for k20 in 0..=n / 20 {
        for k10 in 0..=(n - 20 * k20) / 10 {
            for k5 in 0..=(n - 20 * k20 - 10 * k10) / 5 {
                let k1 = n - 20 * k20 - 10 * k10 - 5 * k5;

                result.push(vec![k20, k10, k5, k1]);
            }
        }
    }

    result
}

#[cfg(test)]
mod tests580 {
    use super::*;

    #[test]
    fn n4() {
        let n = 4;

        let expected = vec![
            //   20 10 5  1
            vec![0, 0, 0, 4],
        ];

        let result = task580(n);

        assert_eq!(expected, result);
    }

    #[test]
    fn n20() {
        let n = 20;

        let expected = vec![
            //   20 10 5  1
            vec![0, 0, 0, 20],
            vec![0, 0, 1, 15],
            vec![0, 0, 2, 10],
            vec![0, 0, 3, 5],
            vec![0, 0, 4, 0],
            vec![0, 1, 0, 10],
            vec![0, 1, 1, 5],
            vec![0, 1, 2, 0],
            vec![0, 2, 0, 0],
            vec![1, 0, 0, 0],
        ];

        let result = task580(n);

        assert_eq!(expected, result);
    }
}

fn main() {}