// Prompt

// Given a binary tree, find the height, that is the length of the path from the root to the deepest leaf node.

/*
 * You may assume the node class is:
 * class TreeNode {
 *   constructor(value, left = null, right = null) {
 *     this.value = value;
 *     this.left = left;
 *     this.right = right;
 *   }
 * }
 */
function treeHeight(root) {
    if (!root) return -1;
    let leftHeight = treeHeight(root.left);
    let rightHeight = treeHeight(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
}