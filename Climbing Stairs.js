/*A staircase is given with a non-negative cost per each step.
 Once you pay the cost, you can either climb one or two steps. 
 Create a solution to find the minimum sum of costs to reach the top (finishing the payments including cost[-2] or cost[-1]).
  You can either start at cost[0] or cost[1]. */

function minimumCost(cost,n)
    {
  
    let dp = new Array(n);
  
  
    if (n == 1)
        return cost[0];
  
 
    dp[0] = cost[0];
    dp[1] = cost[1];
  
    for (let i = 2; i < n; i++)
    {
        dp[i] = Math.min(dp[i - 1],
                         dp[i - 2]) + cost[i];
    }
  
    return Math.min(dp[n - 2],
                    dp[n - 1]);
    }
     
    let a=[10, 15, 20];
    let n = a.length;
    console.log(minimumCost(a, n));