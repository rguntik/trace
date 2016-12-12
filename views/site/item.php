<?
$children = count($item['children'] > 0) && !empty($item['children']);
?>
<li class="function-item closed">
    <table>
        <? if ($children) : ?>
            <td style="" class="open-list">
                <button type="button" class="btn btn-default dropdown-toggle open-active">
                    <span class="caret"></span>
                </button>
            </td>
        <? endif; ?>
        <td>
            <div class="title btn btn-default" <? if ($children) : ?>style="border-top-left-radius: 0; border-bottom-left-radius: 0; border-left: none;" <? endif; ?>>
                <?= $item['functionName']; ?>
                <div class="function-description">
                   <?
                   dump($item);
                   ?>
                    <? if (is_array($fieldsToShow)) : ?>
                        <table>
                            <? foreach ($fieldsToShow as $val): ?>
                                <? if (array_key_exists($val, $item)) : ?>
                                    <tr>
                                        <td>
                                            <?= $val; ?>
                                        </td>
                                        <td>
                                            <?= $item[$val]; ?>
                                        </td>
                                    </tr>
                                <? endif; ?>
                            <? endforeach; ?>
                        </table>
                    <? endif; ?>
                </div>
            </div>
        </td>
    </table>
    <? if ($children) : ?>
        <ul>
            <? foreach ($item['children'] as $val) : ?>
                <?= $this->render('item', ['item' => $val]); ?>
            <? endforeach; ?>
        </ul>
    <? endif; ?>
</li>