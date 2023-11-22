//print solid rectangle pattern.



import java.util.Scanner;
public class QpOne {
    public static void main(String[] args) {
        System.out.println("enter the n");
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println("enter the m");
        int m = sc.nextInt();
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= m; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
