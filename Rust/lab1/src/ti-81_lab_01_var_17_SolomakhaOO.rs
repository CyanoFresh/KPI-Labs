// Solomakha Oleksandr TI-81 | Variant 17

/*

204

В некоторых видах спортивных состязаний выступление каждого спортсмена
независимо оценивается несколькими судьями, затем из всей совокупности
оценок удаляются наиболее высокая и наиболее низкая, а для оставшихся
оценок вычисляется среднее арифметическое, которое и идет в зачет спортсмену.
Если наиболее высокую оценку выставило несколько судей, то из совокупности
оценок удаляется только одна такая оценка; аналогично поступают с наиболее низкими оценками.
Даны натуральное число n, действительные положительные числа a_1, ..., а_n (n >= З).
Считая, что числа a_1, ... , а_n — это оценки, выставленные судьями одному из участников
соревнований, определить оценку, которая пойдет в зачет этому спортсмену.

*/
fn task204(a: &[i32]) -> f32 {
    assert!(a.len() >= 3);

    let mut cloned = a.to_vec();

    let min = cloned.iter().cloned().min().unwrap();
    let max = cloned.iter().cloned().max().unwrap();

    if let Some(index) = cloned.iter().position(|x| *x == min) {
        cloned.remove(index);
    }

    if let Some(index) = cloned.iter().position(|x| *x == max) {
        cloned.remove(index);
    }

    cloned.iter().sum::<i32>() as f32 / cloned.len() as f32
}

#[cfg(test)]
mod tests204 {
    use super::*;

    #[test]
    fn removes_1_max_and_min() {
        let marks = [1, 1, 2, 3, 4, 4];

        let result = task204(&marks);

        assert_eq!(2.5, result);
    }

    #[test]
    fn simple() {
        let marks = [1, 2, 3, 4];

        let result = task204(&marks);

        assert_eq!(2.5, result);
    }

    #[test]
    fn all_equal() {
        let marks = [3, 3, 3, 3];

        let result = task204(&marks);

        assert_eq!(3.0, result);
    }
}

/*

181.б

Даны целые числа a_1,...,a_50. Получить сумму тех чисел данной последовательности, которые
б) нечетны и отрицательны;

*/
fn task181b(a: &[i32]) -> i32 {
    a.iter().filter(|&&x| x < 0 && x % 2 != 0).sum()
}

#[cfg(test)]
mod tests181b {
    use super::*;

    #[test]
    fn simple() {
        let a = [0, 1, 2, 3, 4, 5, -1, -2, -3, -4, -5];

        let result = task181b(&a);

        assert_eq!(-9, result);
    }
}

/*

222.б

Даны натуральное число n, действительные числа y_1,...,y_n. Найти:

б) min(|z_1|,...,|z_n|), z_i = { y_i при |y_i| > 1, 2 в противном случае

*/
fn task222b(y: &[i32]) -> i32 {
    y.iter()
        .map(|&y_i| if i32::abs(y_i) > 1 { i32::abs(y_i) } else { 2 })
        .min()
        .unwrap()
}

#[cfg(test)]
mod tests222b {
    use super::*;

    #[test]
    fn simple() {
        let y = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
        // z = -4, -3, -2, 2, 2, 2, 2, 3, 4

        let result = task222b(&y);

        assert_eq!(2, result);
    }

    #[test]
    fn without_2() {
        let y = [-4, -3, 3, 4];

        let result = task222b(&y);

        assert_eq!(3, result);
    }
}

/*

190

Даны натуральное число n, целые числа а_1,...,a_n
Получить сумму положительных и число отрицательных членов последовательности а_1,...,a_n

*/
fn task190(a: &[i32]) -> (u32, u32) {
    let sum = a.iter().filter(|&&x| x > 0).sum::<i32>();
    let count = a.iter().filter(|&&x| x < 0).count();

    (sum as u32, count as u32)
}

#[cfg(test)]
mod tests190 {
    use super::*;

    #[test]
    fn simple() {
        let a = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

        let result = task190(&a);

        assert_eq!((10, 4), result);
    }

    #[test]
    fn simple2() {
        let a = [-4];

        let result = task190(&a);

        assert_eq!((0, 1), result);
    }

    #[test]
    fn simple3() {
        let a = [];

        let result = task190(&a);

        assert_eq!((0, 0), result);
    }
}

fn main() {}